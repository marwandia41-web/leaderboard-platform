import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '@firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';

type ResponseData = {
  success?: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await sendPasswordResetEmail(auth, email);

    res.status(200).json({
      success: true,
      message: 'Password reset email sent successfully',
    });
  } catch (error: any) {
    console.error('Reset password error:', error);

    if (error.code === 'auth/user-not-found') {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(500).json({ error: error.message || 'Failed to send reset email' });
  }
}