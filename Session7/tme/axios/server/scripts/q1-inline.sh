#!/bin/bash
# Run with bash scripts/q1-inline.sh

curl -X POST http://localhost:8000/ \
    -H "Content-Type: application/json" \
    -d '{"texte": "Hello"}'
