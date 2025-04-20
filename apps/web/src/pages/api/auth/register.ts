import supabase  from '../../../lib/supabase';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                return res.status(400).json({
                    error: error.message,
                });
            }

            res.status(200).json({
                user: data.user,
            })
        } catch (e) {
            res.status(500).json({
                error: 'Error al crear el usuario, intente de nuevo.'
            });
        }
    } else {
        res.status(405).json({
            error: 'Método no permitido'
        })
    }
}