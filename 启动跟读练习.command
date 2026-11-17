#!/bin/zsh
# 双击本文件：启动本地网页并打开 Edge。
# 跟读打分需要麦克风，浏览器只允许在 localhost 或 https 下使用麦克风，
# 所以不能直接双击 index.html。

cd "$(dirname "$0")" || exit 1

PORT=8791

if lsof -ti tcp:$PORT >/dev/null 2>&1; then
  lsof -ti tcp:$PORT | xargs kill -9 >/dev/null 2>&1
fi

python3 -m http.server $PORT >/tmp/yuwen-speak.log 2>&1 &
SERVER_PID=$!
sleep 1

open -a "Microsoft Edge" "http://localhost:$PORT/index.html"

echo ""
echo "  一年级小书房已打开：http://localhost:$PORT/"
LAN_IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null)
if [ -n "$LAN_IP" ]; then
  echo "  iPad（同一 Wi-Fi）可打开：http://$LAN_IP:$PORT/"
fi
echo "  第一次点话筒时，请点「允许」使用麦克风。"
echo "  关掉这个窗口，服务就会停止。"
echo ""

wait $SERVER_PID
