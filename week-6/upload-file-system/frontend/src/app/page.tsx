"use client";
import React, { useState } from "react";
import FileUploadForm from "./components/FileUploadForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white flex-col rounded-lg shadow-lg glassmorphism-style">
      <FileUploadForm />
    </div>
  );
}
