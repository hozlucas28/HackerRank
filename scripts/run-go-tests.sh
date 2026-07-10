#! /bin/bash

# Parse options
while [[ $# -gt 0 ]]; do
	case "$1" in
		-c | --category)
			category="$2"
			shift 2
			;;

		-c=* | --category=*)
			category="${1#*=}"
			shift 1
			;;

		-h | --help)
			need_help='true'
			shift 1
			break
			;;

		--)
			shift 1
			break
			;;

		-*)
			printf "\e[31mAn invalid option was found!\e[0m\n" >&2
			exit 1
			;;

        *)
            break
            ;;
	esac
done

# Show help if needed
if [[ -n "$need_help" ]]; then
	printf "Usage: $0 [OPTIONS]...

Options:
	-t, --category     category to test (e.g., 'software-engineer-prepare-kit')
	-h, --help         display this help and exit

If \`--category\` is not provided, all tests will be run.
"
	exit 0
fi

# Runs tests for a given category
test_challenges() {
	local category="src/$1"

	challenges=($(ls "$category"))
	for challenge in "${challenges[@]}"; do
		cd "$category/$challenge/"
		go test ./...
	done
}

# Change from script directory to project root directory
cd $(cd "$(dirname "$0")/.." && pwd)

if [[ $? -ne 0 ]]; then
	printf "\e[31mFailed to change directory to project root.\e[0m\n" >&2
	exit 1
fi


if [[ -z "$category" ]]; then
	# Run all tests if category is not specified
	categories=(
		'Security'
		'Software Engineer Prepare Kit'
	)

	for category in "${categories[@]}"; do
		test_challenges "$category"
	done
else
	# Run tests for a specific category
	case "$category" in
		security)
			category='Security'
			;;

		software-engineer-prepare-kit)
			category='Software Engineer Prepare Kit'
			;;

		*)
			printf "\e[31mInvalid category!\e[0m\n" >&2
			exit 1
			;;
	esac

	test_challenges "$category"
fi
