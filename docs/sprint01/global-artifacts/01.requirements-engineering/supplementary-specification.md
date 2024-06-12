# Supplementary Specification (FURPS+)


## Functionality

_Specifies functionalities that:_

- _are common across several US/UC;_
- _are not related to US/UC, namely: Audit, Reporting and Security._


Security: 
Authentication: User accounts should be protected with strong authentication mechanisms.
Authorization: Users should only have access to the features and data they are authorized for.

## Usability 

_Evaluates the user interface. It has several subcategories,
among them: error prevention; interface aesthetics and design; help and
documentation; consistency and standards._


Graphic interface: the UI should be visually appealing, user-friendly, and organized. This includes factors like layout, color scheme, typography, and overall visual presentation.


Intuitive Error Handling: this application provide clear and user-friendly error messages for unexpected situations during core functionalities, helping users understand and resolve issues.


Ease of Use: the application should be intuitive and user-friendly for all experience levels. This applies to features commonly used across different user stories, such as creating discussions, navigating the forum structure, replying to discussions, and voting. Users with varying technical backgrounds should be able to easily perform these actions.

Accessibility: The application should be accessible to users with disabilities. This ensures features like creating discussions, replying, or voting are usable regardless of visual (e.g., screen readers, color contrast), auditory (e.g., captions for videos), or motor limitations (e.g., keyboard navigation). (aditional)

Multiplatform: the system should have the ability to run on multiple operating systems or platforms. (aditional) 

Help and Documentation: Users should have access to adequate help resources, such as tutorials, FAQs, and in-app help messages. These resources should be clear, concise, and easy to find. (aditional)



## Reliability
_Refers to the integrity, compliance and interoperability of the software. The requirements to be considered are: frequency and severity of failure, possibility of recovery, possibility of prediction, accuracy, average time between failures._


System Uptime: The system should be available to users most of the time, with minimal downtime for maintenance or technical issues.
Data Integrity: User data and content should be stored securely and accurately, preventing loss or corruption.

## Performance
_Evaluates the performance requirements of the software, namely: response time, start-up time, recovery time, memory consumption, CPU usage, load capacity and application availability._

Response time: The user shouldn't experience excessive delays while using the system.

Throughput: The application should handle a high volume of users and requests without significant performance degradation. Even with many users creating discussions, voting, or browsing the forum, the application should maintain responsiveness.

Resource Utilization: The application should efficiently utilize system resources (CPU, memory, network bandwidth) to support core functionalities effectively. This ensures the application can handle expected usage without wasting resources.

Horizontal Scalability: The application should be designed to scale horizontally by adding more servers as the user base and discussions grow. This allows the system to accommodate increased demands for resources without impacting performance.

Start-up Time: the application should be able to launch and become fully functional after being started. A quick start-up time ensures users can access the forum promptly.





## Supportability
_The supportability requirements gathers several characteristics, such as:
testability, adaptability, maintainability, compatibility,
configurability, installability, scalability and more._ 



Scalability: The system should be able to handle a large and growing user base without performance degradation.


## +

### Design Constraints

_Specifies or constraints the system design process. Examples may include: programming languages, software process, mandatory standards/patterns, use of development tools, class library, etc._
  

(fill in here )


### Implementation Constraints

_Specifies or constraints the code or construction of a system such
such as: mandatory standards/patterns, implementation languages,
database integrity, resource limits, operating system._


(fill in here )


### Interface Constraints
_Specifies or constraints the features inherent to the interaction of the
system being developed with other external systems._


(fill in here )

### Physical Constraints

_Specifies a limitation or physical requirement regarding the hardware used to house the system, as for example: material, shape, size or weight._

(fill in here )