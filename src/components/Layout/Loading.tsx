const Loading = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%",
            }}>
            <div
                style={{
                    width: 48,
                    height: 48,
                    border: "6px solid #e0e0e0",
                    borderTop: "6px solid #1976d2",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                }}
            />
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg);}
                        100% { transform: rotate(360deg);}
                    }
                `}
            </style>
        </div>
    );
};

export default Loading;
