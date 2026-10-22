"""
Simple Python / Flask Web Application
Designed for Docker containerization and image building.
Listens on port 5000 and provides / and /health endpoints.
Includes a built-in fallback if Flask is not installed locally.
"""

import socket
import datetime
import json

try:
    from flask import Flask, jsonify
    USE_FLASK = True
except ImportError:
    USE_FLASK = False
    from http.server import HTTPServer, BaseHTTPRequestHandler

if USE_FLASK:
    app = Flask(__name__)

    @app.route('/')
    def home():
        return jsonify({
            "status": "success",
            "framework": "Flask",
            "message": "Welcome to Containerized Python/Flask Web Application!",
            "hostname": socket.gethostname(),
            "timestamp": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        })

    @app.route('/health')
    def health():
        return jsonify({
            "status": "healthy",
            "service": "flask-web-app"
        }), 200

    def run_server():
        # Listen on 0.0.0.0 so Docker port mapping works
        app.run(host='0.0.0.0', port=5000)

else:
    class SimpleHandler(BaseHTTPRequestHandler):
        def do_GET(self):
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()

            if self.path == '/health':
                payload = {"status": "healthy", "service": "python-web-app"}
            else:
                payload = {
                    "status": "success",
                    "framework": "Python (Built-in HTTP Server)",
                    "message": "Welcome to Containerized Python Web Application!",
                    "hostname": socket.gethostname(),
                    "timestamp": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                }
            self.wfile.write(json.dumps(payload, indent=2).encode('utf-8'))

        def log_message(self, format, *args):
            # Silence default stderr logging for cleaner terminal output
            print(f"[HTTP] {self.address_string()} - {args[0]}")

    def run_server():
        server = HTTPServer(('0.0.0.0', 5000), SimpleHandler)
        print("Server running at http://0.0.0.0:5000 (Press Ctrl+C to stop)")
        server.serve_forever()

if __name__ == '__main__':
    run_server()
