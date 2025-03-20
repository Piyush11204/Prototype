import React, { useState} from 'react';
import { Download, ChevronDown, Smartphone, CheckCircle, Star, Shield, Clock, Info, ArrowRight } from 'lucide-react';

const APKDownloader = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  
  const handleDownload = () => {
    setDownloading(true);
    setDownloadProgress(0);
    
    // Simulate progressive download
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
    
    // Complete download after progress reaches 100%
    setTimeout(() => {
      clearInterval(interval);
      setDownloading(false);
      setDownloadComplete(true);
      setShowNotification(true);
      
      // Create an anchor element and trigger download
      const link = document.createElement('a');
      link.href = 'D:/TechConnect/Prototype/src/downloads/app-debug.apk';
      link.download = 'SecureMessenger.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset states after delay
      setTimeout(() => {
        setDownloadComplete(false);
        setShowNotification(false);
      }, 5000);
    }, 2500);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-50 border-l-4 border-green-500 p-4 rounded shadow-lg max-w-xs animate-pulse">
          <div className="flex">
            <CheckCircle className="text-green-500 flex-shrink-0 mr-3" size={20} />
            <div>
              <p className="text-sm text-green-800 font-medium">Download Complete</p>
              <p className="text-xs text-green-600 mt-1">Your APK file is ready to install</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
        {/* App Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Smartphone size={24} />
              </div>
              <h1 className="text-xl font-bold">SecureMessenger</h1>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">v2.4.3</span>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={12} fill="white" className="text-white" />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-2 text-blue-100">Private messaging with end-to-end encryption</p>
        </div>
        
        {/* App Details */}
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center shadow-sm border border-blue-100">
              {/* App logo */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center">
                <Shield size={24} className="text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">SecureMessenger</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Size: 24.8 MB • Android 6.0+
                  </p>
                </div>
                <div className="bg-green-50 px-2 py-1 rounded text-xs text-green-700 font-medium border border-green-100">
                  Verified
                </div>
              </div>
              
              <div className="mt-3 flex items-center text-xs text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Download size={14} className="mr-1" />
                  <span>50K+ downloads</span>
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  <span>Updated: Mar 15, 2025</span>
                </div>
              </div>
              
              <div className="mt-4">
                {downloading ? (
                  <div className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-500">Downloading...</span>
                      <span className="text-xs font-semibold text-blue-600">{downloadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${downloadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleDownload}
                    disabled={downloadComplete}
                    className={`flex items-center justify-center w-full py-3 px-4 rounded-lg font-medium text-white transition shadow-sm
                      ${downloadComplete ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    {downloadComplete ? (
                      <div className="flex items-center">
                        <CheckCircle className="mr-2" size={18} />
                        Downloaded Successfully
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Download className="mr-2" size={18} />
                        Download APK
                      </div>
                    )}
                  </button>
                )}
              </div>
              
              <div className="mt-3 flex justify-center">
                <p className="text-xs text-gray-400 flex items-center">
                  <Shield size={12} className="mr-1" />
                  Virus scanned • Safe to install
                </p>
              </div>
            </div>
          </div>
          
          {/* App Info Cards */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="bg-blue-100 w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2">
                <Shield size={16} className="text-blue-600" />
              </div>
              <h3 className="text-xs font-medium text-blue-800">Secure</h3>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center">
              <div className="bg-green-100 w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2">
                <CheckCircle size={16} className="text-green-600" />
              </div>
              <h3 className="text-xs font-medium text-green-800">Verified</h3>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 text-center">
              <div className="bg-purple-100 w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2">
                <Info size={16} className="text-purple-600" />
              </div>
              <h3 className="text-xs font-medium text-purple-800">Ad-Free</h3>
            </div>
          </div>
        </div>
        
        {/* Screenshots Carousel */}
        <div className="px-6 py-3 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">App Preview</h3>
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex-shrink-0 w-32 h-64 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={`/api/placeholder/128/256`} 
                  alt={`Screenshot ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* App Features Accordion */}
        <div className="border-t border-gray-100">
          <details className="group">
            <summary className="flex items-center justify-between p-4 cursor-pointer">
              <span className="font-medium text-gray-700">Key Features</span>
              <ChevronDown size={18} className="text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4 text-sm text-gray-600">
              <ul className="space-y-3">
                {[
                  {
                    title: "End-to-End Encryption",
                    desc: "All messages are secured with AES-256 encryption"
                  },
                  {
                    title: "Self-Destructing Messages",
                    desc: "Set timers for automatic message deletion"
                  },
                  {
                    title: "Secure File Sharing",
                    desc: "Share documents, photos and videos securely"
                  },
                  {
                    title: "Private Calling",
                    desc: "Make encrypted voice and video calls"
                  }
                ].map((feature, idx) => (
                  <li key={idx} className="flex border-l-2 border-blue-200 pl-3">
                    <div>
                      <h4 className="font-medium text-gray-800">{feature.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
        
        {/* Installation Instructions */}
        <div className="border-t border-gray-100">
          <details className="group">
            <summary className="flex items-center justify-between p-4 cursor-pointer">
              <span className="font-medium text-gray-700">Installation Guide</span>
              <ChevronDown size={18} className="text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-4 pb-4 text-sm text-gray-600">
              <ol className="space-y-3">
                {[
                  "Download the APK file by clicking the download button",
                  "Open your downloads folder and tap on the APK file",
                  "If prompted, enable \"Install from Unknown Sources\" in your device settings",
                  "Tap \"Install\" when prompted",
                  "Once installation completes, tap \"Open\" to launch the app"
                ].map((step, idx) => (
                  <li key={idx} className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mr-3 font-medium text-xs">
                      {idx + 1}
                    </div>
                    <p className="pt-1">{step}</p>
                  </li>
                ))}
              </ol>
              
              <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-xs text-yellow-800">
                <p className="font-medium">Important Note:</p>
                <p className="mt-1">Your device may display a security warning when installing apps from outside the Play Store. This is normal and our app is verified safe.</p>
              </div>
            </div>
          </details>
        </div>
        
        {/* Reviews */}
        <div className="border-t border-gray-100">
          <details className="group">
            <summary className="flex items-center justify-between p-4 cursor-pointer">
              <span className="font-medium text-gray-700">User Reviews</span>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill={star <= 4 ? "#FBBF24" : "none"} stroke="#FBBF24" />
                  ))}
                </div>
                <span className="text-xs text-gray-500 mr-2">4.8</span>
                <ChevronDown size={18} className="text-gray-500 group-open:rotate-180 transition-transform" />
              </div>
            </summary>
            <div className="px-4 pb-4">
              {[
                {name: "Alex M.", date: "Mar 10, 2025", rating: 5, comment: "Best messaging app I've used. Love the privacy features!"},
                {name: "Jamie K.", date: "Feb 28, 2025", rating: 4, comment: "Very secure and easy to use. Would like to see dark mode added."}
              ].map((review, idx) => (
                <div key={idx} className={`py-3 ${idx > 0 ? 'border-t border-gray-100' : ''}`}>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                        {review.name.charAt(0)}
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-medium text-gray-700">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={12} fill={star <= review.rating ? "#FBBF24" : "none"} stroke="#FBBF24" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
              
              <button className="mt-2 text-blue-600 text-xs font-medium flex items-center hover:text-blue-700">
                See all reviews
                <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </details>
        </div>
        
        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="text-xs text-center text-gray-500">
            <p>By downloading, you agree to our <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy</span></p>
            <p className="mt-2 text-gray-400">© 2025 SecureMessenger • All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APKDownloader;