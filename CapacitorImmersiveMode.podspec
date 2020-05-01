
  Pod::Spec.new do |s|
    s.name = 'CapacitorImmersiveMode'
    s.version = '0.0.1'
    s.summary = 'Handle immersive/kiosk mode '
    s.license = 'MIT'
    s.homepage = 'https://github.com/hfucek/capacitor-immersive-mode.git'
    s.author = 'Hrvoje Fucek'
    s.source = { :git => 'https://github.com/hfucek/capacitor-immersive-mode.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end