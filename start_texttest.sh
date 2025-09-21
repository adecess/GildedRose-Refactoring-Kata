#!/bin/sh

if [ ! -d "venv" ]; then
    uv venv venv
    uv pip install --python venv/bin/python texttest
fi
venv/bin/texttest -d . -con "$@"
