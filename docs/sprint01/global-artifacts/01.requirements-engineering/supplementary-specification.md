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