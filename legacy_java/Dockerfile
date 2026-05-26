FROM tomcat:9-jdk11

# Remove default ROOT
RUN rm -rf /usr/local/tomcat/webapps/ROOT/*

# Create directory structure
RUN mkdir -p /usr/local/tomcat/webapps/ROOT/WEB-INF/classes
RUN mkdir -p /usr/local/tomcat/webapps/ROOT/WEB-INF/lib

# Download required libraries
RUN wget -O /usr/local/tomcat/webapps/ROOT/WEB-INF/lib/jstl-1.2.jar https://repo1.maven.org/maven2/javax/servlet/jstl/1.2/jstl-1.2.jar
RUN wget -O /usr/local/tomcat/webapps/ROOT/WEB-INF/lib/mysql-connector-java-5.1.49.jar https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.49/mysql-connector-java-5.1.49.jar
RUN wget -O /usr/local/tomcat/webapps/ROOT/WEB-INF/lib/standard-1.1.2.jar https://repo1.maven.org/maven2/taglibs/standard/1.1.2/standard-1.1.2.jar

# Copy Java source code into a temp directory to compile
COPY src/java /tmp/src

# Compile the java classes against Tomcat and downloaded libs
RUN find /tmp/src -name "*.java" > /tmp/sources.txt
RUN javac -cp "/usr/local/tomcat/lib/*:/usr/local/tomcat/webapps/ROOT/WEB-INF/lib/*" -d /usr/local/tomcat/webapps/ROOT/WEB-INF/classes @/tmp/sources.txt

# Copy the web folder contents to ROOT
COPY web/ /usr/local/tomcat/webapps/ROOT/

EXPOSE 8080
CMD ["catalina.sh", "run"]
