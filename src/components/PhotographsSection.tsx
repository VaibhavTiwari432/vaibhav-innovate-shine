import photo4 from '../assets/imaghe/v23.jpeg';
import photo3 from '../assets/imaghe/v24.jpeg';
import photo1 from '../assets/imaghe/v35.jpeg';
import photo2 from '../assets/imaghe/v45.jpeg';

const PhotographsSection = () => {
  const photoSources = [
    photo1,
    photo2,
    photo3,
    photo4,
  ];

  return (
    <section id="photographs" className="bg-background/90 backdrop-blur-sm py-20 relative z-10 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Photographs</h2>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 items-stretch">
          {/* 2x2 Photo Grid */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {photoSources.map((src, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden bg-card/50 border border-primary/20 shadow-glow">
                <img src={src} alt={`Photograph ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Shared Description */}
          <div className="bg-gradient-card backdrop-blur-sm p-6 rounded-xl border border-primary/20 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-3 text-foreground">A Few Moments</h3>
            <p className="text-muted-foreground leading-relaxed">
              From the quantum dance of light splitting into waves, to the VIBGYOR beauty of visible colors—everything truly exists only in the moment you awaken to its existence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographsSection;
