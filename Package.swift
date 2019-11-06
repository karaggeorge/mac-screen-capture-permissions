// swift-tools-version:5.0
import PackageDescription

let package = Package(
	name: "screen-capture-permissions",
	platforms: [
		.macOS(.v10_12)
	],
	targets: [
		.target(
			name: "screen-capture-permissions"
		)
	]
)
