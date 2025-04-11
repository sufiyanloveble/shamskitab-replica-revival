
import { Button } from "./ui/button";

const QuoteSection = () => {
  return (
    <section className="py-16 bg-islamic-green text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto opacity-80">
              <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V15C10 16.0609 9.57857 17.0783 8.82843 17.8284C8.07828 18.5786 7.06087 19 6 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V15C20 16.0609 19.5786 17.0783 18.8284 17.8284C18.0783 18.5786 17.0609 19 16 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <blockquote className="arabic-text text-2xl md:text-3xl leading-relaxed mb-6 font-arabic">
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </blockquote>
          
          <p className="text-lg md:text-xl italic mb-6">
            "Read in the name of your Lord who created."
          </p>
          
          <p className="text-sm opacity-80 mb-8">— Quran, Surah Al-Alaq (96:1)</p>
          
          <div>
            <Button className="bg-white text-islamic-green hover:bg-islamic-gold hover:text-white">
              Explore Quranic Literature
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
