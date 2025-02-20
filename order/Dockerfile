FROM eclipse-temurin:17 AS build-stage

WORKDIR /app

COPY pom.xml mvnw ./
COPY .mvn .mvn
RUN ./mvnw dependency:go-offline

COPY . .
RUN ./mvnw package -DskipTests

FROM eclipse-temurin:17-jre AS production-stage

WORKDIR /app

COPY --from=build-stage /app/target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
