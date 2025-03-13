echo "Test 1: no name"
curl -X POST http://localhost:8000/api \
    -H "Content-Type: application/json" \
    -d @scripts/q5-no-name.json
echo ""

echo "Test 2: not number"
curl -X POST http://localhost:8000/api \
    -H "Content-Type: application/json" \
    -d @scripts/q5-not-number.json
echo ""
