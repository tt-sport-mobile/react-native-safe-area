require 'json'
package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|

  s.name            = package['name']
  s.version         = package['version']
  s.homepage        = package['homepage']
  s.summary         = package['description']
  s.license         = package['license']
  s.author          = package['author']
  s.platform        = :ios, '8.0'
  s.source          = { :git => 'https://github.com/miyabi/react-native-safe-area', :tag => '#{s.version}' }
  s.source_files    = 'ios/RNSafeArea/*.{h,m}'
  
  s.dependency 'React'

end
