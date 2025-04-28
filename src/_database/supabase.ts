import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5dW16dGRzZWV0YXF1c2F1ZXdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg2NTkyNCwiZXhwIjoyMDYxNDQxOTI0fQ.RKW6jfO0fBWGoI88lAhX_XNEJaBnfZuYbtsjvuid8_Q"
);
