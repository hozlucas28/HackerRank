#! /bin/bash

# Parse options
options=$(getopt -o "h" --long "help" -- "$@")

if [ $? -ne 0 ]; then
	echo -e "\e[31mAn error occurred on parsing options.\e[0m" >&2
	exit 1
fi

eval set -- "$options"

while true; do
	case "$1" in
		"-h" | "--help")
			need_help="true"
			shift 1
			break
			;;
		"--")
			shift
			break
			;;
		*)
			echo -e "\e[31mAn internal error occurred!\e[0m" >&2
			exit 1
			;;
		esac
done

# Show help if needed
if [[ -n "$need_help" ]]; then
	printf "Usage: $0 [OPTIONS]...

Perform a health check of the tools needed to this project.

Options:
	-h, --help     display this help and exit
"
	exit 0
fi

# Gets command version
command_version() {
	local version

	if version=$("$@" 2>/dev/null); then
		echo "v$(echo "$version" | grep --perl-regexp --only-matching '\d+(?:\.\d+){0,2}' | head --lines=1)"
	else
		return 1
	fi
}

# Change from script directory to project root directory
cd $(cd "$(dirname "$0")/.." && pwd)

if [[ $? -ne 0 ]]; then
	echo -e "\e[31mFailed to change directory to project root.\e[0m" >&2
	exit 1
fi

exit_code=0


if command -v go >/dev/null 2>&1; then
	echo -e "\e[32m- Go $(command_version go version) installed.\e[0m"
else
	echo -e "\e[31m- Go is not installed or not found in PATH.\e[0m" >&2
	exit_code=1
fi

if command -v node >/dev/null 2>&1; then
	echo -e "\e[32m- Node.js $(command_version node --version) installed.\e[0m"
else
	echo -e "\e[31m- Node.js is not installed or not found in PATH.\e[0m" >&2
	exit_code=1
fi

if command -v bun >/dev/null 2>&1; then
	echo -e "\e[32m- Bun $(command_version bun --version) installed.\e[0m"
else
	echo -e "\e[31m- Bun is not installed or not found in PATH.\e[0m" >&2
	exit_code=1
fi


exit $exit_code
