const HeroLinks = () => (
  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
    <div data-aos="fade-right" data-aos-delay="300">
      <a className="btn btn-primary w-full mb-4 sm:w-auto sm:mb-0" href="/docs">
        Get Started
      </a>
    </div>
    <div data-aos="fade-left" data-aos-delay="300">
      <a
        className="btn w-full sm:w-auto sm:ml-4"
        href="https://github.com/backend-as-a-platform"
        target="_blank"
      >
        View on Github
      </a>
    </div>
  </div>
);

export default HeroLinks;
