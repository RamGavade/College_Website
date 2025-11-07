"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ChevronRight,
  BookOpen,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GraduationCap,
  Microscope,
  Home,
  Dumbbell,
  Presentation,
  Wifi,
} from "lucide-react"

export default function CollegePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const departments = [
    { name: "Computer Science & Engineering", icon: "💻", description: "Advanced computing and software development" },
    { name: "Mechanical Engineering", icon: "⚙️", description: "Design and manufacturing systems" },
    { name: "Civil Engineering", icon: "🏗️", description: "Infrastructure and construction" },
    { name: "AI-ML", icon: "📡", description: "Advanced AI/ML technologies, neural networks, and intelligent systems" },
    { name: "Data-Science", icon: "🌐", description: "Big data analytics, statistical modeling, and data-driven insights" },
    { name: "Electrical Engineering", icon: "⚡", description: "Power systems and electrical design" },
  ]

  const facilities = [
    { name: "Central Library", icon: BookOpen, description: "Over 50,000 books and digital resources" },
    { name: "Hostel Accommodation", icon: Home, description: "Comfortable living for 1000+ students" },
    { name: "Research Labs", icon: Microscope, description: "State-of-the-art laboratory facilities" },
    { name: "Sports Complex", icon: Dumbbell, description: "Indoor and outdoor sports facilities" },
    { name: "Seminar Halls", icon: Presentation, description: "Modern auditoriums and conference rooms" },
    { name: "Campus WiFi", icon: Wifi, description: "High-speed internet across campus" }, // Replaced emoji with Wifi icon component
  ]

  const events = [
    { title: "Tech Fest 2024", date: "March 15-17", type: "Festival" },
    { title: "Industry Connect Workshop", date: "March 22", type: "Workshop" },
    { title: "Annual Sports Meet", date: "April 5-7", type: "Sports" },
    { title: "Research Symposium", date: "April 12", type: "Academic" },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">DY Patil</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Departments", "Facilities", "Events", "Gallery", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-2">
              {["Home", "About", "Departments", "Facilities", "Events", "Gallery", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksszNzQyJWwqTFin1U-t790-O_epE_DW02w&s')`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">D. Y. Patil College of Engineering</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">& Technology, Kolhapur</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Shaping Tomorrow's Engineers Today</p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
            onClick={() => scrollToSection("about")}
          >
            Explore Our Campus
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our College</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              D. Y. Patil College of Engineering and Technology, Kolhapur is a premier institution dedicated to
              excellence in engineering education and research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://i.pinimg.com/736x/20/be/88/20be88d7f17e07088f669c4e82eb2bfc.jpg"
                alt="College Building"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a globally recognized institution that nurtures innovative engineers and technologists who
                  contribute to society's advancement through cutting-edge research and sustainable solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide world-class engineering education, foster research and innovation, and develop ethical
                  professionals who can address global challenges with technical expertise and social responsibility.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">Faculty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of engineering disciplines designed to prepare students for the challenges of
              tomorrow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4">{dept.icon}</div>
                    <CardTitle className="text-xl text-gray-900">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">{dept.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our campus is equipped with modern infrastructure and facilities to support academic excellence and
              student life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <facility.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{facility.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">{facility.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & News Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Events & News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings, events, and achievements at our college.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {event.type}
                      </Badge>
                      <Calendar className="w-4 h-4 text-gray-500" />
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <CardDescription className="text-red-600 font-medium">{event.date}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Campus Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual tour of our beautiful campus and vibrant student life.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJq_JGnkDuaH2PYFJbpe2re5-KKF_UmtpnQ&s`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={`https://image-static.collegedunia.com/public/reviewPhotos/382083/DYPCET-BAWADA-3.jpg`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={`https://image-static.collegedunia.com/public/reviewPhotos/353947/kb-building-1.jpg`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img
                  src={`https://media.licdn.com/dms/image/v2/C4D22AQGwi3pb-fQRCg/feedshare-shrink_800/feedshare-shrink_800/0/1660149203887?e=2147483647&v=beta&t=t8ZBWFOUP5v4Jal_6Jfu0F7rXAM_V1xjKUnZ3x-W0JM`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for admissions, inquiries, or any other information.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    D. Y. Patil College of Engineering and Technology
                    <br />
                    Kasaba Bawada, Kolhapur - 416006
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+91 231 260 1234</p>
                  <p className="text-gray-600">+91 231 260 5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@dypatilkolhapur.edu.in</p>
                  <p className="text-gray-600">admissions@dypatilkolhapur.edu.in</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.123456789!2d74.123456!3d16.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKolhapur!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Subject</label>
                    <Input placeholder="Admission Inquiry" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                    <Textarea placeholder="Tell us about your inquiry..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl">DY Patil</span>
              </div>
              <p className="text-gray-400 mb-4">Shaping Tomorrow's Engineers Today</p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("departments")} className="hover:text-white">
                    Departments
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("facilities")} className="hover:text-white">
                    Facilities
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Admissions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Academics</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Undergraduate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Postgraduate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Faculty
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Kasaba Bawada, Kolhapur</li>
                <li>Maharashtra - 416006</li>
                <li>+91 231 260 1234</li>
                <li>info@dypatilkolhapur.edu.in</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 D. Y. Patil College of Engineering and Technology, Kolhapur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
