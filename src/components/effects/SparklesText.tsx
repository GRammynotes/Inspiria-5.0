import React, { useEffect, useState } from 'react';
import './SparklesText.css';


const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

interface Sparkle {
    id: string;
    createdAt: number;
    color: string;
    size: number;
    style: React.CSSProperties;
}

const DEFAULT_COLOR = '#8EBC8E';

const generateSparkle = (color: string = DEFAULT_COLOR): Sparkle => {
    return {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        color,
        size: random(10, 20),
        style: {
            top: random(0, 100) + '%',
            left: random(0, 100) + '%',
            zIndex: 2,
        },
    };
};

const SparklesText = ({
    children,
    colors = ['#8EBC8E', '#A8D8A8', '#B4DCB5'],
    frequency = 100,
    className = '',
    style = {}
}: {
    children: React.ReactNode;
    colors?: string[];
    frequency?: number;
    className?: string;
    style?: React.CSSProperties;
}) => {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const color = colors[random(0, colors.length)];
            const sparkle = generateSparkle(color);
            const now = Date.now();

            setSparkles(current => {
                const next = current.filter(s => now - s.createdAt < 750);
                next.push(sparkle);
                return next;
            });
        }, frequency);

        return () => clearInterval(interval);
    }, [colors, frequency]);

    return (
        <span className={`relative inline-block ${className}`} style={style}>
            {children}
            {sparkles.map(sparkle => (
                <Sparkle
                    key={sparkle.id}
                    color={sparkle.color}
                    size={sparkle.size}
                    style={sparkle.style}
                />
            ))}
        </span>
    );
};

const Sparkle = ({ size, color, style }: { size: number; color: string; style: React.CSSProperties }) => {
    return (
        <span className="absolute pointer-events-none block animate-sparkle" style={style}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
                    fill={color}
                />
            </svg>
        </span>
    );
};

export default SparklesText;
