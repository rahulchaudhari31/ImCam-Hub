import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Loader2 } from 'lucide-react';

export default function VideoBanner({
  src = '/assets/placeholder-demo.mp4',
  poster,
  autoPlay = false,
  className = '',
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showControls, setShowControls] = useState(false);
  const [isMuted, setIsMuted] = useState(autoPlay);
  const [isLoading, setIsLoading] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const goFullscreen = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-navy group ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="aspect-video relative">
        {/* Loading skeleton */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-navy"
            >
              {/* Animated shimmer lines */}
              <div className="w-full max-w-xs space-y-3 mb-6">
                <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white/10"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    style={{ width: '40%' }}
                  />
                </div>
                <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white/10"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear', delay: 0.2 }}
                    style={{ width: '60%' }}
                  />
                </div>
                <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white/10"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear', delay: 0.4 }}
                    style={{ width: '35%' }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Loader2 size={14} className="animate-spin" />
                Loading video…
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onCanPlay={() => setIsLoading(false)}
          onLoadedData={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          className="w-full h-full object-cover"
        />

        {/* Play button overlay — shown when paused */}
        {!isPlaying && !isLoading && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-navy/40 backdrop-blur-[2px] z-10"
            aria-label="Play video"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 bg-amber rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(242,153,74,0.45)]"
            >
              <Play size={32} className="text-white ml-1" fill="white" />
            </motion.div>
          </motion.button>
        )}

        {/* Bottom control bar — shown on hover when playing */}
        <motion.div
          initial={false}
          animate={{ opacity: showControls && isPlaying ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-10 pointer-events-none z-10"
        >
          <div className="flex items-center gap-3 pointer-events-auto">
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
              aria-label="Pause"
            >
              <Pause size={16} className="text-white" fill="white" />
            </button>
            <button
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX size={16} className="text-white" />
              ) : (
                <Volume2 size={16} className="text-white" />
              )}
            </button>
            <div className="flex-1" />
            <button
              onClick={goFullscreen}
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize size={16} className="text-white" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
