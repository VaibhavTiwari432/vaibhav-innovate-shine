import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Video, Camera, Mic, ExternalLink, Download } from "lucide-react";

const Collection = () => {
  const collections = [
    {
      category: "Books",
      icon: Book,
      items: [
        {
          title: "Area of Triangle with Single Side: Now Miracle Becomes Reality",
          description: "A mathematical exploration challenging conventional geometric principles.",
          type: "Mathematics",
          status: "Published"
        },
        {
          title: "Swarachit Sometimes - Volume 1",
          description: "First collection of original poetry exploring themes of introspection and growth.",
          type: "Poetry",
          status: "Published"
        },
        {
          title: "Swarachit Sometimes - Volume 2",
          description: "Second poetry collection delving into societal observations and personal reflections.",
          type: "Poetry",
          status: "Published"
        },
        {
          title: "Swarachit Sometimes - Volume 3",
          description: "Latest poetry collection focusing on technology, humanity, and future possibilities.",
          type: "Poetry",
          status: "Published"
        }
      ]
    },
    {
      category: "Videos",
      icon: Video,
      items: [
        {
          title: "The Penumbra",
          description: "First-ever student film produced at IIIT Gwalior, exploring themes of identity and purpose.",
          type: "Film",
          status: "Completed"
        },
        {
          title: "Behind the Scenes: Making of The Penumbra",
          description: "Documentary-style content showcasing the filmmaking process and creative journey.",
          type: "Documentary",
          status: "Available"
        },
        {
          title: "Public Speaking Highlights",
          description: "Collection of talks and presentations on technology, innovation, and leadership.",
          type: "Talks",
          status: "Ongoing"
        }
      ]
    },
    {
      category: "Photographs",
      icon: Camera,
      items: [
        {
          title: "Urban Stories",
          description: "Street photography capturing the essence of city life and human interactions.",
          type: "Street Photography",
          status: "Gallery"
        },
        {
          title: "Natural Perspectives",
          description: "Landscape and nature photography exploring the beauty of the natural world.",
          type: "Nature",
          status: "Gallery"
        },
        {
          title: "Portrait Studies",
          description: "Character studies and artistic portraits showcasing human emotion and expression.",
          type: "Portraits",
          status: "Gallery"
        }
      ]
    },
    {
      category: "Audio",
      icon: Mic,
      items: [
        {
          title: "Poetry Recitations",
          description: "Audio recordings of original poetry performances and spoken word pieces.",
          type: "Poetry",
          status: "Available"
        },
        {
          title: "Technical Talks",
          description: "Recorded presentations on AI, technology trends, and innovation strategies.",
          type: "Presentations",
          status: "Available"
        },
        {
          title: "Philosophical Musings",
          description: "Informal discussions and thoughts on consciousness, ethics, and human nature.",
          type: "Discussions",
          status: "Podcast"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-primary";
      case "Completed": return "bg-secondary";
      case "Available": return "bg-accent";
      case "Gallery": return "bg-muted-foreground";
      case "Ongoing": return "bg-secondary";
      case "Podcast": return "bg-primary";
      default: return "bg-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
            My Collection
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            A curated archive of creative works, spanning literature, visual media, 
            and audio content that reflects my diverse interests and artistic journey.
          </p>

          <div className="space-y-12">
            {collections.map((collection, collectionIndex) => {
              const IconComponent = collection.icon;
              return (
                <div key={collectionIndex} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{collection.category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {collection.items.map((item, itemIndex) => (
                      <Card 
                        key={itemIndex} 
                        className="bg-card/80 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg text-foreground mb-2">
                                {item.title}
                              </CardTitle>
                              <div className="flex gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {item.type}
                                </Badge>
                                <Badge className={`${getStatusColor(item.status)} text-white text-xs`}>
                                  {item.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex items-center gap-2">
                              <ExternalLink className="h-3 w-3" />
                              View
                            </Button>
                            {(item.status === "Published" || item.status === "Available") && (
                              <Button size="sm" variant="outline" className="flex items-center gap-2">
                                <Download className="h-3 w-3" />
                                Download
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;