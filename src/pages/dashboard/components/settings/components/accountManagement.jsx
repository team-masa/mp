import React, { useState } from 'react';

const AccountManagement = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUpdateEmail = (e) => {
        e.preventDefault();
        // Add logic for updating email
        console.log('Update Email:', email);
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Add logic for changing password
            console.log('Change Password:', password);
        } else {
            console.error('Passwords do not match');
        }
    };

    const handleDeleteAccount = () => {
        // Add logic for deleting account
        console.log('Delete Account');
    };

    return (
        <div className="p-6 bg-[#282A3A] bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-[#735F32]">Account Management</h1>
            <p className="mb-4 text-[#C69749]">Manage your account settings here.</p>

            <form onSubmit={handleUpdateEmail} className="mb-6 space-y-4">
                <div>
                    <label className="block text-[#C69749] mb-2">Update Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white w-full"
                        placeholder="New Email"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#C69749] hover:bg-[#735F32] text-white px-4 py-2 rounded transition-colors duration-300"
                >
                    Update Email
                </button>
            </form>

            <form onSubmit={handleChangePassword} className="mb-6 space-y-4">
                <div>
                    <label className="block text-[#C69749] mb-2">Change Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white w-full"
                        placeholder="New Password"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border border-[#C69749] rounded p-2 bg-[#282A3A] text-white w-full"
                        placeholder="Confirm New Password"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#C69749] hover:bg-[#735F32] text-white px-4 py-2 rounded transition-colors duration-300"
                >
                    Change Password
                </button>
            </form>

            <div className="mb-6">
                <button
                    onClick={handleDeleteAccount}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-300"
                >
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default AccountManagement