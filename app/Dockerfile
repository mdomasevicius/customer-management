FROM java:8-jre-alpine

ADD build/libs/app.jar app.jar

ENTRYPOINT exec java $JAVA_OPTS -server -jar app.jar
