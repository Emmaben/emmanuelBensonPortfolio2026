import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";
import SpotlightCard from "./SpotlightCard";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Downloading Resume",
      description: "Your download will start shortly.",
    });
  };

  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Bio
              </h3>
              <p className="text-muted-foreground">
                Computer Science graduate (BSc Hons, Edinburgh Napier University) with 4+ years of
                hands-on software development experience across freelance, internship, and academic
                settings. Proficient in building full-stack web applications with React, Next.js,
                Flask, and .NET (C#), and in developing machine learning solutions in Python using
                Scikit-learn and transformer models. Strong foundation in REST APIs, relational and
                NoSQL databases, version control, and Agile workflows. Seeking a Software Developer,
                Python Developer, Full-Stack, or AI/ML Developer role.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <SpotlightCard className="h-full border-[1px] border-white/10 backdrop-blur-sm bg-card/50">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />{" "}
                      Education
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="font-medium">BSc (Hons) Computer Science</p>
                        <p className="text-sm text-muted-foreground">Edinburgh Napier University, Scotland, UK</p>
                        <p className="text-sm text-muted-foreground">Sept 2022 – July 2026</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">National Diploma, Computer Science</p>
                        <p className="text-sm text-muted-foreground">Yaba College of Technology, Lagos, Nigeria</p>
                        <p className="text-sm text-muted-foreground">Sept 2020 – Apr 2022</p>
                      </div>
                    </div>
                  </CardContent>
                </SpotlightCard>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <SpotlightCard className="h-full border-[1px] border-white/10 backdrop-blur-sm bg-card/50">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Frontend Developer (Freelance)</p>
                        <p className="text-sm text-muted-foreground">Upwork — Remote, UK</p>
                        <p className="text-sm text-muted-foreground">Mar 2022 – Present</p>
                      </div>
                      <div>
                        <p className="font-medium">IT Assistant (Internship)</p>
                        <p className="text-sm text-muted-foreground">W Hotel Edinburgh</p>
                        <p className="text-sm text-muted-foreground">Jun 2024 – Sep 2024</p>
                      </div>
                      <div>
                        <p className="font-medium">Frontend Developer (Freelance)</p>
                        <p className="text-sm text-muted-foreground">Self-employed — Lagos, Nigeria</p>
                        <p className="text-sm text-muted-foreground">Jan 2020 – Feb 2022</p>
                      </div>
                    </div>
                  </CardContent>
                </SpotlightCard>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/me.jpg"
                  alt="Emmanuel Benson"
                  loading="lazy"
                />
                <AvatarFallback>EB</AvatarFallback>
              </Avatar>
              {/* <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                3.41 GPA
              </div> */}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Emmanuel Benson</h3>
              <p className="text-muted-foreground">
                Software Developer | Full-Stack & Python Developer
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="bg-primary/10">
                React
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Python
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                TypeScript
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Flask
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                C#
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                ML / AI
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Emmanuel_Benson_CV.pdf">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
