export default function Footer() {
  return (
    <div className="flex justify-between items-center px-12 pt-12 pb-8">
      <div className="text-sm">
        Laugardie © 2025
      </div>
      <div className="flex gap-6 text-sm">
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
