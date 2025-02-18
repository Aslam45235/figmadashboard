


        
      <Box width="100%" display="flex" justifyContent="center">
      <Card
        sx={{
          padding: { xs: "1rem", sm: "3rem" },
          paddingTop: { md: "4rem" },
          paddingBottom: { md: "5rem" },
          borderRadius: "20px",
          boxShadow: 3,
          width: { xs: "100%", sm: "80%", md: "600px" }, // Adjust the width
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="p" fontWeight="600" fontSize="32px">
              Login to Account
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                marginTop: "15px",
                pb: "30px",
                fontSize: { xs: "15px", textAlign: "center", md: "18px" },
              }}
            >
              Create an account to continue
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              maxWidth: "518px",
            }}
          >
            <Box
              sx={{
                textAlign: "left",
                marginBottom: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                variant="p"
                fontWeight="500"
                sx={{ color: "#202224", opacity: "0.6", fontSize: "18px" }}
              >
                Email address:
              </Typography>
              <TextField
                fullWidth
                placeholder="esteban_schiller@gmail.com"
                size="small"
                sx={{
                  border: "1px solid #D8D8D8",
                  borderRadius: "8px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                    color: "#A6A6A6",
                    backgroundColor: "#F1F4F9",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                textAlign: "left",
                marginBottom: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                variant="p"
                fontWeight="500"
                sx={{ color: "#202224", opacity: "0.6", fontSize: "18px" }}
              >
                Username:
              </Typography>
              <TextField
                fullWidth
                placeholder="username"
                size="small"
                sx={{
                  border: "1px solid #D8D8D8",
                  borderRadius: "8px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                    color: "#A6A6A6",
                    backgroundColor: "#F1F4F9",
                  },
                }}
              />
            </Box>

            <Box sx={{ marginBottom: "12px" }}>
              <Typography
                variant="p"
                fontSize="18px"
                fontWeight="500"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  color: "#202224",
                  opacity: "0.6",
                }}
              >
                Password
                <Link
                  href="#"
                  sx={{
                    fontSize: "18px",
                    textDecoration: "none",
                    color: "#202224",
                    opacity: "0.6",
                  }}
                >
                  Forget Password?
                </Link>
              </Typography>
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                size="small"
                sx={{
                  border: "1px solid #D8D8D8",
                  borderRadius: "8px",
                }}
                InputProps={{
                  style: {
                    fontSize: "20px",
                    color: "#A6A6A6",
                    backgroundColor: "#F1F4F9",
                  },
                }}
              />
            </Box>
          </Box>

          <Box sx={{ textAlign: "left" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I accept terms and conditions"
              sx={{ marginBottom: "20px", color: "#202224", opacity: "0.6" }}
            />
          </Box>

          <Box
            sx={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "10px",
                fontSize: "16px",
                textTransform: "none",
                width: "350px",
              }}
            >
              Sign In
            </Button>
            <Typography
              variant="p"
              sx={{
                fontSize: "18px",
                opacity: "0.6",
                letterSpacing: "-0.06px",
              }}
            >
              Already have an account?{" "}
              <Link
                href="#"
                sx={{ textDecoration: "none", color: "#1A73E8" }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>