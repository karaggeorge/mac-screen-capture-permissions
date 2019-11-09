import Cocoa

struct ScreenCapturePermissions {
  static func checkPermissions() -> String {
    let stream = CGDisplayStream(
      dispatchQueueDisplay: CGMainDisplayID(),
      outputWidth: 1,
      outputHeight: 1,
      pixelFormat: Int32(kCVPixelFormatType_32BGRA),
      properties: nil,
      queue: DispatchQueue.global(),
      handler: nil
    )

    return stream == nil ? "false" : "true"
  }
}
