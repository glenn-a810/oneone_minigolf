#!/bin/sh
# 로컬 workerd 로 워커를 띄우고 라이브 확인 스크립트를 돌린 뒤 정리한다 (개발용)
set -u

NODE_BIN="${NODE_BIN:-/workspace/.tools/node-v22.23.5-linux-x64/bin}"
PATH="$NODE_BIN:$PATH"
export PATH

cd "$(dirname "$0")/.." || exit 1
rm -f .tmp-dev.log

npx wrangler dev --port 8787 --ip 127.0.0.1 > .tmp-dev.log 2>&1 &
WPID=$!

READY=0
i=0
while [ "$i" -lt 45 ]; do
  sleep 1
  i=$((i + 1))
  if curl -s -m 2 http://127.0.0.1:8787/health > /dev/null 2>&1; then
    READY=1
    echo "로컬 워커 준비 완료 (${i}초)"
    break
  fi
done

if [ "$READY" -ne 1 ]; then
  echo "워커가 뜨지 않았습니다:"
  tail -20 .tmp-dev.log
  kill "$WPID" 2>/dev/null
  exit 1
fi

curl -s -m 5 http://127.0.0.1:8787/health
echo
echo "--- live check ---"
node test/live-check.mjs "$@"
STATUS=$?

kill "$WPID" 2>/dev/null
sleep 1
pkill -f workerd 2>/dev/null

exit "$STATUS"
