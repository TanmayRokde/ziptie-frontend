import React from "react";
import { Link } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-12 border-t border-gray-700/50 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
              <Link className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold heading-glow">Ziptie</span>
          </div>
          <div className="flex items-center space-x-8 text-gray-400">
            <a
              href="https://www.npmjs.com/package/ziptie-shortlinks"
              className="hover:text-orange-400 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              SDK on npm
            </a>
            <a
              href="https://github.com/stars/TanmayRokde/lists/ziptie"
              className="hover:text-orange-400 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo List
            </a>
            <a
              href="https://github.com/tanmayrokde/ziptie/tree/main/ziptie-mvp-backend"
              className="hover:text-orange-400 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              mvp-backend
            </a>
            <a
              href="https://github.com/tanmayrokde/ziptie/tree/main/ziptie-redis-microservice"
              className="hover:text-orange-400 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Redis Microservice
            </a>
            <a
              href="https://github.com/tanmayrokde/ziptie/tree/main/testtie"
              className="hover:text-orange-400 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              testtie
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700/50 text-center text-gray-400">
          <p>
            &copy; 2024 Ziptie. SDK + gateway + Redis microservice maintained in
            one monorepo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
