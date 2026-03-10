import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phone = '082387444002', message = 'Halo, saya ingin bertanya tentang pendaftaran.' }) => {
  const normalizePhone = (p) => {
    if (!p) return '';
    const digits = p.replace(/\D/g, '');
    if (digits.startsWith('0')) return '62' + digits.slice(1);
    return digits;
  };

  const phoneNumber = normalizePhone(phone);
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0012 .5 11.9 11.9 0 001.5 12 11.5 11.5 0 003.2 17.9L2 22l4.2-1.3A11.9 11.9 0 0012 23.5 11.86 11.86 0 0020.52 3.48zM12 21.5c-1.6 0-3.2-.4-4.6-1.1l-.3-.2-2.5.8.8-2.4-.2-.4A9.2 9.2 0 012.8 12 9.5 9.5 0 0112 3.5c5.2 0 9.5 4.3 9.5 9.5S17.2 22 12 22zm5.1-7.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1s-.7.9-.8 1.1c-.1.2-.2.3-.5.1-.9-.5-1.5-.9-2.1-2-.2-.4 0-.6.1-.7.1-.1.2-.2.3-.4.1-.1.1-.3 0-.5-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.6-.9-.6-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.2 4.8 4.3 3 .9 3 .6 3.6.6.6 0 1-.4 1.2-.7.2-.3.2-.6.1-.8-.1-.2-.5-.3-.8-.4z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
