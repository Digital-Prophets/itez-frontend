export default function Footer() {
  return (
    <div>
      <footer className="footer px-4 py-6 fixed bottom-0 ">
        <div className="footer-content ">
          <p className="text-sm text-gray-600 text-center">
            © Copyright {new Date().getFullYear()}. All rights reserved. Made
            with{" "}
            <span role="img" aria-label="Love">
              ♥
            </span>{" "}
            by{" "}
            <a href="https://github.com/Digital-Prophets/itez-frontend">
              Digital-Prophets
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
