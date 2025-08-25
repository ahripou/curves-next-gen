import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TestimonialVideo = {
  id: string;
  title: string;
  author?: string;
  src?: string; // MP4 URL
  youtubeUrl?: string; // YouTube URL (will be embedded lazily)
  poster?: string; // Optional poster image
};

// Helper to extract YouTube ID
const getYouTubeId = (url: string) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v") || undefined;
    const parts = u.pathname.split("/");
    const embedIndex = parts.indexOf("embed");
    if (embedIndex !== -1 && parts[embedIndex + 1]) return parts[embedIndex + 1];
  } catch (_) {}
  return undefined;
};

const VideoCard = ({ video }: { video: TestimonialVideo }) => {
  const [playing, setPlaying] = useState(false);
  const ytId = useMemo(() => (video.youtubeUrl ? getYouTubeId(video.youtubeUrl) : undefined), [video.youtubeUrl]);

  return (
    <Card className="overflow-hidden shadow-card bg-background">
      <div className="relative aspect-video w-full">
        {/* YouTube embed (lazy) */}
        {ytId ? (
          playing ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="group w-full h-full relative grid place-items-center bg-muted/30"
              aria-label={`Lire le témoignage vidéo: ${video.title}`}
              onClick={() => setPlaying(true)}
            >
              <img
                src={`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`}
                alt={`Miniature vidéo: ${video.title}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-black/30" />
              <span className="relative z-10 rounded-full px-5 py-3 bg-primary text-primary-foreground shadow-glow hover:opacity-90 transition">
                ▶ Lire
              </span>
            </button>
          )
        ) : (
          // MP4 fallback
          <video
            className="w-full h-full"
            poster={video.poster}
            preload="metadata"
            controls
            playsInline
            src={playing ? video.src : undefined}
            onPlay={() => setPlaying(true)}
          >
            {video.src && <source src={video.src} type="video/mp4" />}
          </video>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">{video.title}</h3>
        {video.author && (
          <p className="text-sm text-muted-foreground mt-1">{video.author}</p>
        )}
      </div>
    </Card>
  );
};

export const TestimonialsSection = () => {
  // Add your video links here (MP4 urls or YouTube links)
  const videos: TestimonialVideo[] = [
    { 
      id: "v1", 
      title: "Témoignage Curves - Transformation incroyable", 
      youtubeUrl: "https://youtube.com/shorts/JH1VySn2WOo?feature=share" 
    },
    { 
      id: "v2", 
      title: "Résultats Curves - Mon parcours fitness", 
      youtubeUrl: "https://youtube.com/shorts/YLzi0dPyr5c?feature=share" 
    },
    { 
      id: "v3", 
      title: "Curves m'a changé la vie - Témoignage", 
      youtubeUrl: "https://youtube.com/shorts/3Vy73ZQZCXs?feature=share" 
    },
  ];

  return (
    <section className="py-20 bg-background" aria-labelledby="temoignages-video-title">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 id="temoignages-video-title" className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Témoignages vidéo
          </h2>
          <p className="text-muted-foreground">
            Elles racontent leur expérience Curves : motivation, résultats et bien-être.
          </p>
        </div>

        {videos.length === 0 ? (
          <Card className="p-8 text-center bg-muted/20">
            <p className="text-muted-foreground">
              Ajoutez vos vidéos MP4 ou liens YouTube et je les intégrerai ici avec un chargement optimisé.
            </p>
            <div className="mt-4">
              <Button
                variant="default"
                onClick={() => window.open("https://api.fitness-academie.fr/widget/booking/T9vZhkFs9OQlPEKG1uSA", "_blank")}
              >
                Essayer une séance gratuite
              </Button>
            </div>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
