import "./Sida2.css";


function Sida2() {
    return (
      <div>
        <h1>Kompetenser</h1>
        <main>
          <section>
            <h2>Tekniska kompetenser</h2>
            <p>Ett par inledande texter om mina kompetenser</p>
          </section>
  
          <div className="tech">
            <article className="tech-article">
              <h2>Java Programmering A</h2>
              <img
                src="https://media.istockphoto.com/id/870344898/photo/3d-text-of-java.webp?a=1&b=1&s=612x612&w=0&k=20&c=j7l0I1bmoYU7m_HNgyRqG5YxlcSH9vXTaY4ihXf322U="
                alt="Bild relaterad till Java Programmering A"
              />
              <p>
                Under Java Programmering A fick vi lära oss grunderna som att deklarera och initiera variabler.
                Vi skapade ett enkelt tärningsspel för att förstå loopar och if-satser.
              </p>
            </article>
  
            <article className="tech-article">
              <h2>Java Programmering B</h2>
              <img
                src="https://media.istockphoto.com/id/870344898/photo/3d-text-of-java.webp?a=1&b=1&s=612x612&w=0&k=20&c=j7l0I1bmoYU7m_HNgyRqG5YxlcSH9vXTaY4ihXf322U="
                alt="Bild relaterad till Java Programmering B"
              />
              <p>
                Java Programmering B gick djupare in på språket; vi lärde oss avancerade koncept
                som enhanced switch, interfaces, och abstrakta metoder, abstrakta klasser.
              </p>
            </article>
  
            <article className="tech-article">
              <h2>Databashantering</h2>
              <img
                src="https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?w=800&auto=format&fit=crop&q=60"
                alt="Bild relaterad till databashantering"
              />
              <p>
                Jag har arbetat med databashantering (SQL, JDBC, HSQLDB) för att bygga databasintegrerade applikationer.
              </p>
            </article>
  
            <article className="tech-article">
              <h2>Python</h2>
              <img
                src="https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?w=800&auto=format&fit=crop&q=60"
                alt="Bild relaterad till Python-programmering"
              />
              <p>
                Python var det första språket jag lärde mig. Vi fokuserade på grundläggande programmeringskoncept,
                som datatyper (strängar, booleans) och funktioner.
              </p>
            </article>
  
            <article className="tech-article">
              <h2>Webbutveckling</h2>
              <img
                src="https://media.istockphoto.com/id/1924137135/photo/online-blog-search-learning-work-internet-freelance-business-post-website-online-homepage.webp?a=1&b=1&s=612x612&w=0&k=20&c=YUwT30LGjjflugUwWCseBxdXs8mvwuRvzNNnN-W5gNQ="
                alt="Bild relaterad till webbutveckling"
              />
              <p>
                Jag har erfarenhet av HTML, CSS och Flexbox för att skapa responsiva webbplatser,
                samt använt media queries för olika skärmstorlekar.
              </p>
            </article>
          </div>
        </main>
  
        <footer>
          <p>
            © 2025 Cedrik |{" "}
            <a href="https://github.com/ditt-anvandarnamn" target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            | <a href="mailto:resslecedrik@gmail.com">E-post</a>
          </p>
        </footer>
      </div>
    );
  }
  
  export default Sida2;
  