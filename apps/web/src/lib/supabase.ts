import { createClient } from "@supabase/supabase-js";

// Usa las claves de configuración de la API del proyecto en Supabase
const supabaseUrl = "https://puesgjbxmhfjnkeuwrnp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1ZXNnamJ4bWhmam5rZXV3cm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNjMyMzUsImV4cCI6MjA2MDczOTIzNX0.5Dw4DWBJ0FvYWLHGLbJ-zEoc6iSuauaA8kPQ5NmasBQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;