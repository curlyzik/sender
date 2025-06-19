"use client";

import { toast } from "sonner";
import { X } from "lucide-react";
import { toast_success_icon, blue_ne_arrow_icon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

const displaySuccessMessage = (
  message: string,
  description?: string,
  previewLink?: string,
) => {
  const toastId = toast(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        border: "solid 1px #D5D7DA",
        background: "white",
        borderRadius: "12px",
        width: "30rem",
        // marginLeft: "-9rem",
        // marginTop: "6rem",
        padding: "1rem",
        // position: "absolute",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <Image src={toast_success_icon} alt="success_icon" />

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                color: "#414651",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              {message}
            </span>
            <X
              style={{ color: "#535862", height: "20px", width: "20px" }}
              className="cursor-pointer"
              onClick={() => dismissToast()}
            />
          </div>

          {description && (
            <div>
              <span
                style={{
                  color: "#535862",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                {description}
              </span>
            </div>
          )}
          {previewLink && (
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  marginTop: "8px",
                }}
              >
                <span
                  style={{
                    color: "#535862",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  Dismiss
                </span>
                <Link
                  href={previewLink}
                  target="_blank"
                  style={{
                    color: "#0948B5",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    textDecoration: "none",
                  }}
                >
                  Preview
                  <Image src={blue_ne_arrow_icon} alt="arrow" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    {
      style: {
        background: "transparent",
        border: "none",
        boxShadow: "none",
      },
      duration: previewLink ? 10000 : 2000,
    },
  );

  const dismissToast = () => toast.dismiss(toastId);
  return toastId;
};

export default displaySuccessMessage;
