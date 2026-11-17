import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Bye = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "1rem",
      }}
    >
      {/* Background Animated Orbs & Confetti */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "rgba(99, 102, 241, 0.2)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "rgba(236, 72, 153, 0.2)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      {/* Floating small stars for extra magic */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "6px",
            height: "6px",
            background: "white",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        style={{
          position: "relative",
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "3rem 2rem",
          borderRadius: "1.5rem",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Animated Checkmark Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            background: "linear-gradient(135deg, #4f46e5, #db2777)",
            borderRadius: "50%",
            marginBottom: "2rem",
            boxShadow: "0 10px 20px -5px rgba(79, 70, 229, 0.5)",
          }}
        >
          <FaCheckCircle style={{ fontSize: "3rem", color: "white" }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            color: "#cbd5e1",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
          }}
        >
          Your message has been successfully received. Our team will review it and get back to you within 24 hours.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBack}
          style={{
            padding: "1rem 2.5rem",
            borderRadius: "50px",
            border: "none",
            background: "linear-gradient(to right, #4f46e5, #db2777)",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 10px 20px -5px rgba(79, 70, 229, 0.4)",
            transition: "all 0.2s",
          }}
        >
          Go Back
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Bye;