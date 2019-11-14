import Cocoa

struct ScreenCapturePermissions {
  static func hasPermissions() -> Bool {
    let stream = CGDisplayStream(
      dispatchQueueDisplay: CGMainDisplayID(),
      outputWidth: 1,
      outputHeight: 1,
      pixelFormat: Int32(kCVPixelFormatType_32BGRA),
      properties: nil,
      queue: DispatchQueue.global(),
      handler: { _, _, _, _ in }
    )

    return stream != nil
  }
}
