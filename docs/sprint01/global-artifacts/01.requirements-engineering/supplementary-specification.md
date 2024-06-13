# Supplementary Specification (FURPS+)


## Functionality

Security: 

* Authentication: User accounts are protected with strong authentication mechanisms (username; password).
* Authorization: Users can only have access to the features and data when authorized (only registered user can create discussions/posts and interact throught comments).

## Usability 

* Graphic interface: the UI should be visually appealing, user-friendly, and organized. This includes factors like layout, color scheme, typography, and overall visual presentation.
    * Visually Appealing: the UI employ a color scheme and visual style aligned with the brand identity and target > audience.
    * User-Friendly: the UI is easy to navigate and understand. 
    * Organized: The information presented in a clear and logical structure and the layout guide users towards important functionalities.


* Intuitive Error Handling: this application provide clear and user-friendly error messages for unexpected situations during core functionalities, helping users understand and resolve issues (e.g., "Yeahhhhh, text posts should be 20 to 10000 characters. Yours was 8. 🤠")


* Ease of Use: the application is intuitive and user-friendly for all experience levels. This applies to features commonly used across different user stories, such as creating discussions, navigating the forum structure, replying to discussions, and voting. Users with varying technical backgrounds should be able to easily perform these actions without tutorial.

* Suggestions for new update:
    * Accessibility: The application should be accessible to users with disabilities. This ensures features like creating discussions, replying, or voting are usable regardless of visual (e.g., screen readers, color contrast), auditory (e.g., captions for videos), or motor limitations (e.g., keyboard navigation).
    * Multiplatform: the system should have the ability to run on multiple operating systems or platforms.
    * Help and Documentation: Users should have access to adequate help resources, such as tutorials, FAQs, and in-app help messages. These resources should be clear, concise, and easy to find.



## Reliability

* System Uptime: The system is available most of the time, with minimal downtime for maintenance or technical issues.

* Suggestion:
Data Integrity: User data and content should be stored securely and accurately, preventing loss or corruption.

## Performance

* Start-up Time: the application is be able to launch and become fully functional after being started. A quick start-up time ensures users can access the forum promptly. (< 10 seconds)

* Suggestions:
    * Response time: The user shouldn't experience excessive delays while using the system less than X seconds.
    * Throughput: The application handles a high volume of users and requests without significant performance degradation. Even with many users creating discussions, voting, or browsing the forum, the application should maintain responsiveness.
    * Resource Utilization: The application is efficiently utilizing system resources (CPU, memory, network bandwidth) to support core functionalities effectively. This ensures the application can handle expected usage without wasting resources.
    * Horizontal Scalability: The application should be designed to scale horizontally by adding more servers as the user base and discussions grow. This allows the system to accommodate increased demands for resources without impacting performance.



## Supportability

* no clear non-functionality verified in this topic.
* Suggestion:
    * Scalability: The system is able to handle a large and growing user base without performance degradation.

## +

### Design Constraints

* Programming Languages and Frameworks: Typescript, React, SASS, Redux
* Software Development Process: The project follow the methodology Agile
* Standards and Patterns: Adherence to industry standards or design patterns can be a constraint.  Following established coding conventions or utilizing pre-built UI components can ensure code quality, maintainability, and consistency.
* Development Tools: Git, PlantUML, Node 2.9.0, Java.
* Database Technology:** The choice of database technology can be a constraint. The application might require a specific type of database (e.g., relational database like MySQL) based on data storage needs and performance considerations.

### Implementation Constraints

_Specifies or constraints the code or construction of a system such
such as: mandatory standards/patterns, implementation languages,
database integrity, resource limits, operating system._

* Standards and Patterns: 
The application should adhere to established coding standards and design patterns to ensure code consistency, maintainability, and reusability. This might involve following specific coding conventions, utilizing industry-standard design patterns for specific functionalities, or adopting a particular architectural framework.
* Implementation Languages:
The application should be developed using specific programming languages and technologies. This could involve using a particular language like Java, Python, or C#, or leveraging specific frameworks like Spring or Django for web development.
* Database Integrity:
The application should enforce data integrity within the underlying database. This might involve implementing data validation rules to ensure data accuracy and consistency, using appropriate data types to store information, and employing mechanisms to prevent data corruption or loss.
* Resource Limits:
The application should be designed to operate within defined resource constraints (CPU, memory, network bandwidth). This could involve optimizing code to minimize resource consumption, setting memory allocation limits for different components, or establishing guidelines for efficient database queries.
* Operating System:
The application might be specified to run on a particular operating system (e.g., Windows, Linux, macOS) or be designed to be portable across different operating systems.

### Interface Constraints
_Specifies or constraints the features inherent to the interaction of the
system being developed with other external systems._

* Data Format Compatibility: the application should adhere to standardized data formats (e.g., JSON, XML) for data exchange with external systems. This ensures compatibility and simplifies data parsing and processing.
* API Standards Compliance: the application should comply with established API standards (e.g., REST, SOAP) when interacting with external services. This promotes consistent interaction patterns and facilitates integration.
* Authentication and Authorization Protocols: the application should implement secure authentication and authorization protocols (e.g., OAuth, SAML) when exchanging data with external systems. This safeguards sensitive information and ensures authorized access.
*Communication Protocols: the application should utilize appropriate communication protocols (e.g., HTTP, HTTPS) for data transfer with external systems. This ensures reliable and secure data transmission.
* Error Handling and Communication: the application should implement a robust error handling mechanism for communication with external systems. This includes defining error codes, error messages, and retry procedures to maintain system stability and user experience.
* Performance Optimization: the application should be optimized for efficient data exchange with external systems, minimizing latency and maximizing throughput. This ensures a responsive and performant user experience.
* Security Considerations: the application should adhere to strict security measures when interacting with external systems, including data encryption, access control, and vulnerability mitigation strategies. This protects sensitive information and prevents unauthorized access.
* Documentation and Versioning: the application's interface specifications, protocols, and data formats should be thoroughly documented and versioned. This facilitates maintainability, compatibility, and integration with external systems.
* Monitoring and Alerting: the application should implement monitoring and alerting mechanisms for interface interactions with external systems. This allows for proactive identification and resolution of potential issues.
* Future Compatibility: the application's interface design should consider future compatibility with evolving standards, technologies, and external systems. This ensures long-term adaptability and scalability.

### Physical Constraints

_Specifies a limitation or physical requirement regarding the hardware used to house the system, as for example: material, shape, size or weight._

* Server Hardware: the application may have specific requirements for server hardware, such as minimum CPU cores, RAM capacity, storage space, or network bandwidth. These requirements ensure that the hardware can adequately handle the application's workload and user traffic.
* Data Center Environment: the application may have specific environmental requirements for the data center where it is hosted, such as temperature, humidity, power stability, or physical security measures. These requirements ensure that the environment is suitable for maintaining the integrity and availability of the application's data and infrastructure.
* Networking Infrastructure: the application may have specific requirements for network infrastructure, such as network speed, bandwidth allocation, or redundancy protocols. These requirements ensure that the network can effectively support the application's communication needs and handle potential traffic spikes.
* Device Compatibility: the application may have specific requirements for devices that users will use to access it, such as minimum operating system versions, screen resolutions, or browser compatibility. These requirements ensure that the application can be used consistently across a range of devices without performance or compatibility issues.
* Accessibility Considerations: the application may have physical constraints related to accessibility for users with disabilities. This may include requirements for hardware such as Braille displays or specialized keyboards, or software features such as screen readers or alternative input methods.
