export default function Footer() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center px-4 md:px-8 py-6 gap-4 md:gap-0">
      <div className="text-sm">
        Laugardie © 2025
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
        <a
          href="https://www.linkedin.com/in/laugardie/?locale=en_US"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          Linkedin
        </a>
        <a
          href="https://twitter.com/laugardie"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://github.com/laugardie"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          Github
        </a>
        <a
          href="https://medium.com/@laugardie"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          Medium
        </a>
        <a
          href="mailto:laugardie89@gmail.com"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  );
}
