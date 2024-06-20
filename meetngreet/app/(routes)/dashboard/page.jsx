"use client";
import { db } from '@/config/FirebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function Dashboard() {
    const { user } = useKindeBrowserClient();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (user) {
            isBusinessRegistered();
        } else {
            setLoading(false);
        }
    }, [user]);

    const isBusinessRegistered = async () => {
        if (!navigator.onLine) {
            console.log('Client is offline. Please check your internet connection.');
            return;
        }

        try {
            const docRef = doc(db, "Business", user.email);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                console.log("No such document!");
                router.replace('/new-business');
            }
        } catch (error) {
            console.error('Error getting document:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
           Meeting Type
        </div>
    );
}

export default Dashboard;
