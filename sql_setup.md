## SQL Setup
### macOS:

1. **Homebrew Installation**:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   brew install mysql
   ```

2. **Start MySQL**:
   ```bash
   brew services start mysql
   ```

3. **Secure MySQL** (Optional but recommended):
   ```bash
   mysql_secure_installation
   ```

4. **Access MySQL**:
   ```bash
   mysql -u root -p
   ```

### Linux (Ubuntu/Debian):

1. **Update Package Index**:
   ```bash
   sudo apt update
   sudo apt install mysql-server
   ```

2. **Start MySQL**:
   ```bash
   sudo systemctl start mysql
   ```

3. **Secure MySQL** (Optional but recommended):
   ```bash
   sudo mysql_secure_installation
   ```

4. **Access MySQL**:
   ```bash
   mysql -u root -p
   ```

These instructions should help you set up MySQL on your macOS and Linux systems.
