import React from 'react';
import Link from 'next/link';
import { Header } from '@components/common/Header';
import { useAuth } from '@features/auth/hooks/useAuth';

export default function HomePage() {
  const { user, loading } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      <Header />

      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">🏆 Leaderboard Pro</h1>
          <p className="text-xl text-white/90 mb-8">
            Compete, Collect Points, and Dominate the Rankings!
          </p>

          {!user && (
            <div className="flex gap-4 justify-center">
              <Link
                href="/register"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg transition"
              >
                Login
              </Link>
            </div>
          )}

          {user && (
            <div className="flex gap-4 justify-center">
              <Link
                href="/dashboard"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition"
              >
                Go to Dashboard
              </Link>
              <Link
                href="/leaderboard"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg transition"
              >
                View Leaderboard
              </Link>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-white">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-2">Track Progress</h3>
            <p>Monitor your points and climb the leaderboard in real-time</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-white">
            <div className="text-4xl mb-4">🪙</div>
            <h3 className="text-2xl font-bold mb-2">Earn Rewards</h3>
            <p>Collect coins and purchase exclusive items in the shop</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-white">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="text-2xl font-bold mb-2">VIP Benefits</h3>
            <p>Unlock premium features and special privileges</p>
          </div>
        </div>

        {/* Top Players Preview */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">🌟 Top Players</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>🥇 Player 1 - 50,000 points</span>
              <span className="text-vip">💎 VIP</span>
            </div>
            <div className="flex justify-between items-center">
              <span>🥈 Player 2 - 45,000 points</span>
            </div>
            <div className="flex justify-between items-center">
              <span>🥉 Player 3 - 40,000 points</span>
              <span className="text-vip">💎 VIP</span>
            </div>
          </div>

          <Link
            href="/leaderboard"
            className="mt-6 inline-block bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded transition"
          >
            View Full Leaderboard
          </Link>
        </div>
      </main>
    </div>
  );
}