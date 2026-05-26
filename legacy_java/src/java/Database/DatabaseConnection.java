/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Database;

/**
 *
 * @author Admin
 */
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.sql.SQLException; 
  
// This class can be used to initialize the database connection 
public class DatabaseConnection { 
    public static Connection initializeDatabase() 
        throws SQLException, ClassNotFoundException 
    { 
        // Initialize all the information regarding 
        // Database Connection 
        String dbDriver = "com.mysql.jdbc.Driver"; 
        
        // Read from environment variables if provided, otherwise use defaults
        String dbHost = System.getenv("DB_HOST") != null ? System.getenv("DB_HOST") : "localhost";
        String dbPort = System.getenv("DB_PORT") != null ? System.getenv("DB_PORT") : "3306";
        String dbURL = "jdbc:mysql://" + dbHost + ":" + dbPort + "/"; 
        
        // Database name to access 
        String dbName = System.getenv("DB_NAME") != null ? System.getenv("DB_NAME") : "hospital"; 
        String dbUsername = System.getenv("DB_USER") != null ? System.getenv("DB_USER") : "root"; 
        String dbPassword = System.getenv("DB_PASS") != null ? System.getenv("DB_PASS") : "root"; 
  
        Class.forName(dbDriver); 
        Connection con = DriverManager.getConnection(dbURL+dbName,dbUsername,dbPassword); 
        return con; 
    } 
} 

