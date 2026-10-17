'use client';
import { useEffect, useRef } from 'react';
import { LuArrowUpRight, LuX } from 'react-icons/lu';
import type { Project } from '@/data/site';
import Button from './ui/Button';
import styles from './styles/Projects.module.css';

type VideoModalProps = {
  project: Project | null;
  onClose: () => void;
};

// Native <dialog> gives us focus trapping, Escape to close, and focus restoration
const VideoModal = ({ project, onClose }: VideoModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }
    if (!project && dialog.open) dialog.close();
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  const link = project?.live ?? project?.github;

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby="video-modal-title"
      onClose={onClose}
      onClick={(e) => {
        // A click on the dialog element itself (not its content) is a click on the backdrop
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project?.video && (
        <div className={styles.modalInner}>
          <div className={styles.modalHeader}>
            <h2 id="video-modal-title" className={styles.modalTitle}>
              {project.title}
            </h2>
            <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close video">
              <LuX aria-hidden="true" />
            </button>
          </div>
          <video
            key={project.video}
            className={styles.modalVideo}
            src={project.video}
            poster={project.image}
            controls
            autoPlay
            playsInline
          />
          {link && (
            <div className={styles.modalActions}>
              <Button href={link} external size="sm" icon={<LuArrowUpRight />}>
                {project.live ? 'Visit live site' : 'View on GitHub'}
              </Button>
            </div>
          )}
        </div>
      )}
    </dialog>
  );
};

export default VideoModal;
