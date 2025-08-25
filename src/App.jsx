import React, { useState } from 'react';
import './App.css';
import { 
  Shield, 
  TrendingUp, 
  Rocket, 
  Zap, 
  MessageSquare, 
  Database, 
  PenTool, 
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Lock,
  BarChart3,
  Globe,
  Award,
  Upload,
  FileText,
  Image,
  Video,
  Brain,
  Server,
  Key,
  Clock,
  DollarSign
} from 'lucide-react';

// Import images
import llmArchitecture from './assets/rahJP7cgcjVt.png';
import aiDashboard from './assets/W6rs6LbQIOJj.png';
import dataAnalytics from './assets/SDGBXYO0Hjfm.webp';
import dataSecurity from './assets/uObyGXt0lSE6.png';

function App() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    industry: '',
    dataVolume: '',
    useCase: '',
    employees: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-blue-900">NowGo</span>
                <span className="nowgo-gradient-text"> AI</span>
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#product" className="text-gray-700 hover:text-blue-900 transition-colors">Product</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-900 transition-colors">Benefits</a>
              <a href="#use-cases" className="text-gray-700 hover:text-blue-900 transition-colors">Use Cases</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-900 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Official NVIDIA Partner
              </span>
              <button 
                onClick={() => setShowForm(true)}
                className="nowgo-primary text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Deploy Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
              Enterprise LLM
              <span className="block nowgo-gradient-text">Customized</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-shadow">
              Transform your internal data into competitive advantage with proprietary AI. 
              Increase your company valuation by up to 50% with 100% protected data.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="stats-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold nowgo-gradient-text">50%+</div>
                <div className="text-sm">Valuation Increase</div>
              </div>
              <div className="stats-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold nowgo-gradient-text">74%</div>
                <div className="text-sm">Positive ROI</div>
              </div>
              <div className="stats-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold nowgo-gradient-text">100%</div>
                <div className="text-sm">Data Protected</div>
              </div>
              <div className="stats-card rounded-lg p-4 text-center">
                <div className="text-3xl font-bold nowgo-gradient-text">24h</div>
                <div className="text-sm">Implementation</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowForm(true)}
                className="nowgo-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Create My LLM Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {!submitted ? (
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Create Your <span className="nowgo-gradient-text">Custom LLM</span>
                  </h2>
                  <button 
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Form */}
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Industry *
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select your industry</option>
                          <option value="technology">Technology</option>
                          <option value="finance">Finance</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="retail">Retail</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="education">Education</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Data Volume *
                        </label>
                        <select
                          name="dataVolume"
                          value={formData.dataVolume}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select data volume</option>
                          <option value="small">Less than 1TB</option>
                          <option value="medium">1TB - 10TB</option>
                          <option value="large">10TB - 100TB</option>
                          <option value="enterprise">More than 100TB</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Primary Use Case *
                        </label>
                        <select
                          name="useCase"
                          value={formData.useCase}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select primary use case</option>
                          <option value="customer-support">Customer Support AI</option>
                          <option value="data-analysis">Data Analysis & SQL</option>
                          <option value="content-creation">Content Creation</option>
                          <option value="sales-automation">Sales Automation</option>
                          <option value="document-processing">Document Processing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Employees *
                        </label>
                        <select
                          name="employees"
                          value={formData.employees}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select company size</option>
                          <option value="startup">1-50 employees</option>
                          <option value="small">51-200 employees</option>
                          <option value="medium">201-1000 employees</option>
                          <option value="large">1001-5000 employees</option>
                          <option value="enterprise">5000+ employees</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full nowgo-primary text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Creating Your LLM...
                          </>
                        ) : (
                          <>
                            Deploy Custom LLM
                            <Rocket className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Process Overview */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      What Happens Next?
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 nowgo-primary rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-white text-sm font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Secure Environment Setup</h4>
                          <p className="text-gray-600 text-sm">We create an isolated, encrypted database environment within your infrastructure</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 nowgo-secondary rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-white text-sm font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Document Upload Portal</h4>
                          <p className="text-gray-600 text-sm">Upload PDFs, spreadsheets, images, videos - all processed securely</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 nowgo-accent rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-white text-sm font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">AI Training & Deployment</h4>
                          <p className="text-gray-600 text-sm">Custom LLM trained on your data, ready in 24 hours</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-green-800 font-semibold">100% Secure</span>
                      </div>
                      <p className="text-green-700 text-sm mt-1">
                        Your data never leaves your control. Military-grade encryption and GDPR compliance guaranteed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Custom LLM is Being Created!
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We're setting up your secure AI environment. You'll receive access credentials within 24 hours.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Next Steps:</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-blue-800">Environment setup: 2-4 hours</span>
                    </div>
                    <div className="flex items-center">
                      <Key className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-blue-800">Access credentials sent to your email</span>
                    </div>
                    <div className="flex items-center">
                      <Upload className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-blue-800">Document upload portal ready</span>
                    </div>
                    <div className="flex items-center">
                      <Brain className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-blue-800">AI training begins automatically</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowForm(false)}
                  className="nowgo-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Custom LLM is the 
              <span className="nowgo-gradient-text"> Future of Your Business</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Companies implementing internal AI are seeing revolutionary transformations 
              in productivity, security, and valuation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="w-16 h-16 nowgo-primary rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Data, Your AI</h3>
              <p className="text-gray-600 mb-4">
                Isolated internal database. Zero sharing. Maximum security 
                with automatic GDPR/CCPA compliance.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Isolated environment</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Military encryption</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Zero data leakage</li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="w-16 h-16 nowgo-secondary rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">74% ROI in 6 Months</h3>
              <p className="text-gray-600 mb-4">
                Companies with internal AI report 30%+ average ROI increase 
                and 6.8x higher returns with flexible infrastructure.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />80% cost reduction</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />300% productivity</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Measurable ROI</li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="w-16 h-16 nowgo-accent rounded-lg flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valuation +50%</h3>
              <p className="text-gray-600 mb-4">
                Companies with proprietary AI see 50%+ valuation increase. 
                $1.81 trillion market values internal innovation.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Competitive advantage</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Innovation leadership</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Premium valuation</li>
              </ul>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready in 24h</h3>
              <p className="text-gray-600 mb-4">
                Automated implementation. No technical complexity. 
                Your team starts using it on day one.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Automatic setup</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Plug & play</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Training included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              4 Use Cases with 
              <span className="nowgo-gradient-text"> Highest ROI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your processes with custom AI and see measurable results 
              from the first month of implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Use Case 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 nowgo-primary rounded-lg flex items-center justify-center mr-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">FAQ AI Agents</h3>
                  <p className="text-green-600 font-semibold">ROI: 80% cost reduction</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                24/7 automated support with 95%+ accuracy. A global e-commerce company 
                saves $2.4M annually by automating 80% of 50,000 daily queries.
              </p>
              <div className="bg-white rounded-lg p-4">
                <img src={aiDashboard} alt="AI Dashboard" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 nowgo-secondary rounded-lg flex items-center justify-center mr-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Natural Language to SQL</h3>
                  <p className="text-green-600 font-semibold">ROI: 300% productivity</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Data democratization for 100% of the team. Any employee gets instant 
                insights without depending on IT. Real-time data-driven decisions.
              </p>
              <div className="bg-white rounded-lg p-4">
                <img src={dataAnalytics} alt="Data Analytics" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 nowgo-accent rounded-lg flex items-center justify-center mr-4">
                  <PenTool className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Content Creation</h3>
                  <p className="text-green-600 font-semibold">ROI: 60% cost reduction</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Personalized content at scale with 100% brand consistency. 
                B2B company creates 50 weekly posts with 90% less production time.
              </p>
              <div className="bg-white rounded-lg p-4">
                <img src={llmArchitecture} alt="LLM Architecture" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sales AI Workers</h3>
                  <p className="text-green-600 font-semibold">ROI: 40% conversions</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Automatic qualification of 100% leads with 90% accurate sales prediction. 
                B2B software company increased conversions by 40% and reduced cycle by 50%.
              </p>
              <div className="bg-white rounded-lg p-4">
                <img src={dataSecurity} alt="Data Security" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-20 nowgo-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              The Enterprise AI Market is Exploding
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-shadow">
              Data proves: companies implementing internal AI today become 
              tomorrow's market leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 nowgo-gradient-text">$95B</div>
              <div className="text-lg">Invested in AI in 2025</div>
              <div className="text-sm opacity-80">Historic record</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 nowgo-gradient-text">71%</div>
              <div className="text-lg">Companies use generative AI</div>
              <div className="text-sm opacity-80">33% growth in 2023</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 nowgo-gradient-text">$1.81T</div>
              <div className="text-lg">Market projection</div>
              <div className="text-sm opacity-80">Exponential growth</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 nowgo-gradient-text">79%</div>
              <div className="text-lg">Adopt AI agents</div>
              <div className="text-sm opacity-80">Advanced automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Upload Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Secure Document 
              <span className="nowgo-gradient-text"> Upload Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload any type of document to your secure, isolated database. 
              Your AI learns from your data while keeping it 100% protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Document Types */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Documents</h3>
              <p className="text-gray-600 text-sm">PDFs, Word, Excel, PowerPoint, Text files</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Images</h3>
              <p className="text-gray-600 text-sm">JPG, PNG, SVG, Charts, Diagrams</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Videos</h3>
              <p className="text-gray-600 text-sm">MP4, Training videos, Presentations</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Databases</h3>
              <p className="text-gray-600 text-sm">CSV, JSON, SQL exports, APIs</p>
            </div>
          </div>

          {/* Security Features */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Military-Grade Security Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Encryption</h4>
                <p className="text-gray-600">AES-256 encryption during upload, processing, and storage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Isolated Environment</h4>
                <p className="text-gray-600">Your data stays in your dedicated, isolated infrastructure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Compliance Ready</h4>
                <p className="text-gray-600">GDPR, CCPA, HIPAA, SOC2 compliant by default</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Investment that 
              <span className="nowgo-gradient-text"> Pays for Itself in 6 Months</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With average 74% ROI in 6 months, custom LLM investment pays for itself 
              quickly through savings and revenue increase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$50,000</div>
                <div className="text-gray-600">/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Basic custom LLM</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>1TB of data</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>8x5 support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Up to 500 employees</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowForm(true)}
                className="w-full nowgo-primary text-white py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Start Now
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$150,000</div>
                <div className="text-gray-600">/month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Advanced custom LLM</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>10TB of data</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>24x7 support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Up to 2,000 employees</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Advanced integrations</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowForm(true)}
                className="w-full nowgo-secondary text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                Deploy Now
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                <div className="text-gray-600">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Fully custom LLM</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited data</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Large corporations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Custom SLA</span>
                </li>
              </ul>
              <button className="w-full nowgo-accent text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Contact Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 nowgo-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            Ready to Multiply Your 
            <span className="nowgo-gradient-text"> Company Valuation?</span>
          </h2>
          <p className="text-xl mb-8 text-shadow">
            Don't fall behind in the AI revolution. Companies implementing internal AI 
            today become tomorrow's market leaders. With 50%+ valuation increase and 74% ROI, 
            the time is now.
          </p>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Results Guarantee</h3>
            <p className="text-lg">
              We guarantee positive ROI in 6 months or we refund your investment. 
              Our confidence comes from hundreds of successful implementations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Deploy Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold">
                  <span className="text-white">NowGo</span>
                  <span className="nowgo-gradient-text"> AI</span>
                </span>
              </div>
              <p className="text-gray-400">
                Transforming businesses with custom AI and protected data.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Custom LLM</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@nowgoai.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, USA</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NowGo AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

