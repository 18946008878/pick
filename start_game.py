#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
破天一剑游戏启动脚本
用于快速启动本地HTTP服务器来运行游戏
"""

import os
import sys
import webbrowser
import threading
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler
import socketserver

def find_free_port():
    """查找可用端口"""
    import socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        s.listen(1)
        port = s.getsockname()[1]
    return port

def start_server(port=8000):
    """启动HTTP服务器"""
    try:
        handler = SimpleHTTPRequestHandler
        
        # 设置MIME类型
        handler.extensions_map.update({
            '.js': 'application/javascript',
            '.css': 'text/css',
            '.html': 'text/html',
        })
        
        httpd = HTTPServer(('localhost', port), handler)
        print(f"🎮 破天一剑游戏服务器启动成功！")
        print(f"📱 请在浏览器访问: http://localhost:{port}")
        print(f"🌐 或在手机浏览器访问: http://你的电脑IP:{port}")
        print(f"⚠️  按 Ctrl+C 停止服务器")
        print("=" * 50)
        
        httpd.serve_forever()
        
    except KeyboardInterrupt:
        print("\n🛑 游戏服务器已停止")
        sys.exit(0)
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ 端口 {port} 已被占用，尝试使用其他端口...")
            return start_server(find_free_port())
        else:
            print(f"❌ 服务器启动失败: {e}")
            sys.exit(1)

def open_browser(url):
    """延迟打开浏览器"""
    time.sleep(1)
    webbrowser.open(url)

def main():
    """主函数"""
    print("🗡️  破天一剑 - 文字版武侠RPG")
    print("=" * 50)
    
    # 检查游戏文件是否存在
    required_files = ['index.html', 'style.css', 'game.js']
    missing_files = [f for f in required_files if not os.path.exists(f)]
    
    if missing_files:
        print("❌ 以下游戏文件缺失:")
        for file in missing_files:
            print(f"   - {file}")
        print("\n请确保所有游戏文件都在当前目录中！")
        sys.exit(1)
    
    # 获取本机IP地址
    try:
        import socket
        hostname = socket.gethostname()
        local_ip = socket.gethostbyname(hostname)
        if local_ip.startswith('127.'):
            # 如果获取到的是本地回环地址，尝试其他方法
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            try:
                s.connect(('8.8.8.8', 80))
                local_ip = s.getsockname()[0]
            except Exception:
                local_ip = 'localhost'
            finally:
                s.close()
    except Exception:
        local_ip = 'localhost'
    
    port = 8000
    
    # 在后台线程中打开浏览器
    browser_thread = threading.Thread(target=open_browser, args=(f'http://localhost:{port}',))
    browser_thread.daemon = True
    browser_thread.start()
    
    print(f"💡 提示：")
    print(f"   - 电脑访问: http://localhost:{port}")
    if local_ip != 'localhost':
        print(f"   - 手机访问: http://{local_ip}:{port}")
    print(f"   - 确保手机和电脑在同一WiFi网络中")
    print()
    
    # 启动服务器
    start_server(port)

if __name__ == "__main__":
    main()